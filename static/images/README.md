# Logo Info

The file `logo.png` contains the white-on-transparent PNG logo.
Additionally, `logo-inverted.png` contains a teal-on-transparent SVG logo.
Finally, `mask-icon.svg` contains a 16×16 monochrome icon, for Safari.

## Creating the Favicon

To convert one of the SVGs to a multiple-size favicon, use the following ImageMagick incantation:

```
convert -background none -density 256x256 logo-inverted.png -define icon:auto-resize favicon.ico
```

## Creating the Apple Touch Icons

At the time of writing, here are [the sizes](https://developer.apple.com/ios/human-interface-guidelines/graphics/app-icon/#app-icon-sizes).

```
convert -background '#449999' -density 256x256 -gravity center -scale 43x43 -extent 57x57 logo.png apple-touch-icon-57.png
convert -background '#449999' -density 256x256 -gravity center -scale 45x45 -extent 60x60 logo.png apple-touch-icon-60.png
convert -background '#449999' -density 256x256 -gravity center -scale 54x54 -extent 72x72 logo.png apple-touch-icon-72.png
convert -background '#449999' -density 256x256 -gravity center -scale 57x57 -extent 76x76 logo.png apple-touch-icon-76.png
convert -background '#449999' -density 256x256 -gravity center -scale 86x86 -extent 114x114 logo.png apple-touch-icon-114.png
convert -background '#449999' -density 256x256 -gravity center -scale 90x90 -extent 120x120 logo.png apple-touch-icon-120.png
convert -background '#449999' -density 256x256 -gravity center -scale 108x108 -extent 144x144 logo.png apple-touch-icon-144.png
convert -background '#449999' -density 256x256 -gravity center -scale 114x114 -extent 152x152 logo.png apple-touch-icon-152.png
convert -background '#449999' -density 256x256 -gravity center -scale 135x135 -extent 180x180 logo.png apple-touch-icon-180.png
```

Do this for every desired size with appropriate padding (`scale / extent ≈ 0.75` seems good .)
For good measure, run the PNG files through something like [ImageOptim](https://imageoptim.com).
