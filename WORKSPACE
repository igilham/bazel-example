workspace(
    name = "bazel_example",
    managed_directories = {"@npm": ["node_modules"]},
)

# load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "9901bc17138a79135048fb0c107ee7a56e91815ec6594c08cb9a17b80276d62b",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.40.0/rules_nodejs-0.40.0.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")
yarn_install(
    name = 'npm',
    package_json = '//:package.json',
    yarn_lock = '//:yarn.lock',
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")
install_bazel_dependencies()

# Set up TypeScript toolchain
load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")
ts_setup_workspace()
