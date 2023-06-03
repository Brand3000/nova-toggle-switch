## Nova Toggle Switch Field

A Laravel Nova toggle switch field. Adapted for Nova 4.
## Installation

You can install the package into a Laravel app that uses Nova via composer:

```bash
composer require brand3000/nova-toggle-switch dev-master
```

## Usage:
Add the below to a nova resource:

```php

# You can set the toggle switch color by color code.
Toggle::make('Toggle')->color('#7e3d2f'),
  
# Also you can set the toggle switch true and false colors that displayed in index and detail views by color code.
Toggle::make('Toggle')->color('#7e3d2f')->onColor('#7a38eb')->offColor('#ae0f04'),
    
```

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
