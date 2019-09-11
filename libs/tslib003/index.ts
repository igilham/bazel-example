// must use absolute workspace path to make imports work
import tslib001 from 'bazel_example/libs/tslib001'

export default () => `I talk to tslib001: ${tslib001()}`
