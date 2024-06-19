<p align="center">
<a href="https://www.413d3z.com" target="_blank"><img src="https://avatars.githubusercontent.com/u/28901773?v=4" width="400"></a>
</p>

# Laravel 11 Vue 3 Vite 5, Inertia, Ziggy



The project is built with the following components:

- Vue 3
- Vite 5
- Laravel Framework 11
- Tailwind
- Inertia
- Ziggy
## ⚡️ How to install

Installation is simple. Just like your ordinary Laravel app.

1. `git clone`
2. `cd YOUPROJECTNAME`
3. `composer install`
4. `cp .env.example .env`
5. `php artisan key:generate`   
6. `npm install`
7. `npm run watch` (or if production `npm run build`)

## ⚡️ How it works

### ➡️ Theming

The project supports theming, you can set a global color for the application theme, it can be done in `tailwind.config.js`.

```js
module.exports = {
    // ...
    theme: {
        extend: {
            colors: {
                theme: colors.blue,
                danger: colors.red
            }
        }
    },
    //...
};
```

### ➡️ Authentication

The project ships with No Authetication as personally I like to build my own depending on the circumstance



### ➡️ Structure

The front-end code is located in `resources/js`. The code is organized in different directories to make things more readable.


### ➡️ CORS

Please make sure you have APP_URL, SANCTUM_STATEFUL_DOMAINS and SESSION_DOMAIN set correctly in [.env]

#### Normal domain

```
APP_URL=http://413d3z.com

SANCTUM_STATEFUL_DOMAINS=413d3z.com
SESSION_DOMAIN=413d3z.com
```

#### Development if using Laragon

```
APP_URL=http://YOURFOLDERNAME.(Whatever you have set in Laragon .test  .local .muhahaha ??)

SANCTUM_STATEFUL_DOMAINS=YOURFOLDERNAME.(Whatever you have set in Laragon .test  .local .muhahaha ??)
SESSION_DOMAIN=YOURFOLDERNAME.(Whatever you have set in Laragon .test  .local .muhahaha ??)
```

## ⚡️ Contributions

Pull requests are welcome, feel free to contribute to this project.

# I hate outdated boilerplates so I will make sure this is always upgraded to the latest Core Components, whatever you choose to add in thereafter is up to you

# The project was created to save myself time for redoing the same things all over again when starting a new Laravel/Vue project.

# The main goal of this project is to reduce code and make everything simpler for bootstrapping new projects. 

# Remember Vite 5 required you to import components with the .vue extension. 
# Also Laravel 11 the default DB is sqlite, be sure to change this to MYSQL or MariaDB is required /config/database.php
