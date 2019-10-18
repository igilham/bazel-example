load("@build_bazel_rules_nodejs//:index.bzl", "npm_package")

filegroup(
    name = 'src',
    srcs = [
        'index.js',
    ],
)

npm_package(
    name = 'pkg',
    srcs = [
        'package.json',
    ],
    deps = [
        ':src'
    ],
    visibility = ['//visibility:public'],
)
