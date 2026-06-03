# Apache server-level SEO config

The app runs as a Next.js Node server (`next start`) behind **Apache**. Three SEO
fixes must be applied at the Apache layer because Next.js (behind the proxy)
can't reliably do them itself.

> Security headers (HSTS, X-Content-Type-Options, X-Frame-Options,
> Referrer-Policy, Permissions-Policy) are already set in `next.config.ts` and
> will deploy with the app. The Apache `Header` lines below are only needed if
> those don't propagate through your proxy — test the live response first with:
> `curl -sI https://contactcenterusa.com | grep -i strict-transport`

## 1. Force HTTP → HTTPS (301)  — Critical
Currently `http://contactcenterusa.com/` returns **200** with no redirect.
In the **:80** vhost:
```apache
<VirtualHost *:80>
    ServerName contactcenterusa.com
    ServerAlias www.contactcenterusa.com
    RewriteEngine On
    RewriteRule ^ https://contactcenterusa.com%{REQUEST_URI} [L,R=301]
</VirtualHost>
```

## 2. Stop forcing `no-store` on HTML  — High
Every page currently returns
`Cache-Control: no-cache, no-store, must-revalidate, max-age=0`, which is being
added by Apache (Next generates these pages statically and would emit cacheable
headers). Find and remove the override, then let Next's headers pass through, or
set sensible caching for the proxied app in the **:443** vhost:
```apache
# Remove any global no-store override (search your config/.htaccess for it):
#   Header set Cache-Control "no-store, ..."   <-- delete/limit this

# Then cache HTML at the edge while keeping content fresh:
<LocationMatch "^/(?!_next/|api/).*$">
    Header set Cache-Control "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
</LocationMatch>

# Next's hashed static assets are safe to cache forever:
<LocationMatch "^/_next/static/">
    Header set Cache-Control "public, max-age=31536000, immutable"
</LocationMatch>
```
*Adjust `s-maxage` to taste; SSG/ISR content can be cached for hours.*

## 3. (Optional) Security headers at Apache — only if Next's don't propagate
In the **:443** vhost:
```apache
Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
Header always unset X-Powered-By
```
Requires `mod_headers` and `mod_rewrite` enabled.

## Verify after applying
```bash
curl -sI http://contactcenterusa.com/        # expect 301 -> https
curl -sI https://contactcenterusa.com/ | grep -iE "strict-transport|cache-control|x-content-type|x-frame"
```
