# Razzle React Loadable Example

## How to use
Download the example [or clone the whole project](https://github.com/jaredpalmer/razzle.git):

```bash
curl https://codeload.github.com/jaredpalmer/razzle/tar.gz/master | tar -xz --strip=2 razzle-master/examples/with-react-loadable
cd with-react-loadable
```

Install it and run:

```bash
yarn install
yarn start
```

## Idea behind the example
This sample has the full SSR setup as described in the [react-loadable docs](https://github.com/thejameskyle/react-loadable#--------------server-side-rendering).
It demonstrates simple dynamic imports using [react-loadable](https://github.com/thejameskyle/react-loadable) on top of SSR with razzle.

## Usfull Commands
```bash
docker stop $(docker ps -q)
docker-compose up --remove-orphans
ocker run --rm -v $PWD:/app -w /app -it v4tech/imagemagick /bin/sh
```

```bash
convert -quality 32 -resize 80% -interlace none mahkeo.jpg mahkeo_.jpg
```
