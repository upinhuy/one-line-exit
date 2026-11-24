# The One-Line Exit

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)
[![Join make.fun](https://img.shields.io/badge/make.fun-join%20with%20my%20referral-brightgreen)](https://make.fun/r/hv9zk8y5)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

One funny resignation letter, exactly one line long, written for the
[make.fun bounty "The One-Line Exit"](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1).

## The line

> I hereby resign, effective immediately — after three years of being told
> 'we're a family here,' I have decided to get emancipated.

## How it works

`main.ts` writes that single line to `/output/entry.txt` — no network, no
randomness, no input files. It validates the line first: 1–140 characters,
exactly one line, not only whitespace.

```sh
node main.ts
```

Set `MAKEFUN_OUTPUT` to a directory to write the file elsewhere when
testing locally.
