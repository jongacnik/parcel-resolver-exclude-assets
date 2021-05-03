# parcel-resolver-exclude-assets

Tells [parcel](https://github.com/parcel-bundler/parcel) to skip paths starting with `/assets`. This is useful when you want to process css/js but leave assets (especially ones included in css) alone.

```css
body {
  background-image: url('/assets/background.jpg'); /* parcel will now skip resolving this asset */
}
```

## Usage

```
yarn add parcel-resolver-exclude-assets --dev
```

**.parcelrc**

```json
{
  "extends": "@parcel/config-default",
  "resolvers": [
    "parcel-resolver-exclude-assets",
    "@parcel/resolver-default"
  ]
}
```

## Config

You can specify custom paths in your `package.json`

```json
{
  "resolverExcludeAssets": [
    "assets",
    "images",
    "fonts"
  ]
}
```