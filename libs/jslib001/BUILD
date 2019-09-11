package(default_visibility = ["//visibility:public"])

load("@build_bazel_rules_nodejs//:defs.bzl", "npm_package")

filegroup(
    name = 'lib',
    srcs = [
        'index.js',
    ],
)

npm_package(
    name = 'package',
    srcs = [
        'package.json',
    ],
    deps = [
        ':lib'
    ],
)
