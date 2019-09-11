# Bazel Example Monorepo

This is my attempt to learn how to use Bazel as the build system for a monorepo.

## Build instructions

I don't know why the obvious build command (`bazel build //libs/jslib001`) doesn't find the `BUILD` file but the below seems to work.

```shell
bazel build ...
```

## Packages

- `//libs/jslib001`: Simple Javascript library with no dependencies
- `//libs/jslib002`: Simple Javascript library with one external dependency
- `//libs/jslib003`: Simple Javascript library with one internal dependency
