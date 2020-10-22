// must use absolute workspace path to make imports work
import lib from 'ws/libs/typescript/no_deps'

export default () => `I talk to tslib001: ${lib()}`
