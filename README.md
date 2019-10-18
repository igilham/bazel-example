# Bazel Example Monorepo

[![CI Build Status](https://github.com/igilham/bazel-example/workflows/CI/badge.svg)](https://github.com/igilham/bazel-example/actions)

This is my attempt to learn how to use Bazel as the build system for a monorepo.

I'm starting with Javascript and Typescript applications and libraries as I currently work in that ecosystem and the Bazel tools to facilitate this seem a little immature so far.

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

Path              | Description
------------------|---------------
`//libs/javascript/no_deps` | Javascript library with no dependencies
`//libs/javascript/external_deps` | Javascript library with one external dependency
`//libs/javascript/internal_deps` | Javascript library with one internal dependency
`//libs/typescript/no_deps` | Typescript library with no dependencies
`//libs/typescript/external_deps` | Typescript library with one external dependency
`//libs/typescript/internal_deps` | Typescript library with one internal Typescript dependency (note: import paths are from workspace root in TS source code)
`//apps/javascript/no_deps` | Javascript app with no dependencies
`//apps/javascript/external_deps` | Javascript app with one external dependency
`//apps/javascript/internal_deps` | Javascript app with one internal dependency
`//apps/typescript/no_deps` | Typescript app with no dependencies

## Notes

The root `package.json` file is important for bootstrapping all the dependencies used in the repo.

Most of the other `package.json` files are optional. They are only used if we are building a publishable package using the `npm_package` rule.

Bazel's Typescript support adds the workspace root as an import path so you can refer to local packages easily. See the path in `tsconfig.json` and the import in `libs/tslib003/index.ts` for an example.

Importing local Javascript packages is a little more difficult. I haven't figured out how to get the import to work yet.

Bundling packages with `rollup` doesn't seem to work in all cases either. I don't know why not.
