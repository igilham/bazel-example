# Bazel Example Monorepo

This is my attempt to learn how to use Bazel as the build system for a monorepo.

## Build instructions

Build everything:

```shell
bazel build ...
```

Build a package

```shell
bazel build //libs/jslib001
```

## Packages

- `//libs/jslib001`: Simple Javascript library with no dependencies
- `//libs/jslib002`: Simple Javascript library with one external dependency
- `//libs/jslib003`: Simple Javascript library with one internal dependency
- `//libs/tslib001`: Simple Typescript library with no dependencies
- `//libs/tslib002`: Simple Typescript library with one external dependency
- `//libs/tslib003`: Simple Typescript library with one internal Typescript dependency (note: import paths are from workspace root in TS source code)
