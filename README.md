# Bazel Example Monorepo

This is my attempt to learn how to use Bazel as the build system for a monorepo.

## Build instructions

I don't know why the obvious build command (`bazel build libs/jslib001:lib`) doesn't find the `BUILD` file but the below seems to work.

```shell
bazel build ...
```
