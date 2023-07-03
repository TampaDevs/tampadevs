#!/usr/bin/env bash

for f in `find . -type f  | grep -v "webp"`
do
  fname=`basename $f | rev | cut -d . -f2 | rev`
  fext=`basename $f | rev | cut -d . -f1 | rev`
  fdir=`dirname $f`
  target="$fdir/$fname.webp"

  # Skip if target already exists
  if [[ -f "$target" ]]; then
    continue
  fi

  imgfmts=(png jpg jpeg gif tif)

  if [[ ${imgfmts[*]} =~ "${fext,,}" ]]; then
      echo "Creating $target from $f"
      convert -limit thread 8 "$f" -quality 90 -define webp:thread-level=1 "$fdir/$fname.webp"
      #exiftool -TagsFromFile $f "-all:all>all:all" "$fdir/$fname.webp"
  fi
done
