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

Path              | Description
------------------|---------------
`//libs/jslib001` | Javascript library with no dependencies
`//libs/jslib002` | Javascript library with one external dependency
`//libs/jslib003` | Javascript library with one internal dependency
`//libs/tslib001` | Typescript library with no dependencies
`//libs/tslib002` | Typescript library with one external dependency
`//libs/tslib003` | Typescript library with one internal Typescript dependency (note: import paths are from workspace root in TS source code)
`//apps/jsapp001` | Javascript app with no dependencies
`//apps/jsapp002` | Javascript app with one external dependency
`//apps/jsapp003` | Javascript app with one internal dependency
`//apps/tsapp001` | Typescript app with no dependencies

## Notes

The root `package.json` file is important for bootstrapping all the dependencies used in the repo.

Most of the other `package.json` files are optional. They are only used if we are building a publishable package using the `npm_package` rule.

Bazel's Typescript support adds the workspace root as an import path so you can refer to local packages easily. See the path in `tsconfig.json` and the import in `libs/tslib003/index.ts` for an example.

Importing local Javascript packages is a little more difficult. I haven't figured out how to get the import to work yet.

Bundling packages with `rollup` doesn't seem to work in all cases either. I don't know why not.
