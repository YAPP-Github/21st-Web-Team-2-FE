const DEFAULT_LANGUAGES = [
  'abap',
  'aes',
  'apex',
  'azcli',
  'bat',
  'bicep',
  'brainfuck',
  'c',
  'cameligo',
  'clike',
  'clojure',
  'coffeescript',
  'cpp',
  'csharp',
  'csp',
  'css',
  'dart',
  'dockerfile',
  'ecl',
  'elixir',
  'erlang',
  'flow9',
  'freemarker2',
  'fsharp',
  'go',
  'graphql',
  'handlebars',
  'hcl',
  'html',
  'ini',
  'java',
  'javascript',
  'js',
  'json',
  'jsx',
  'julia',
  'kotlin',
  'less',
  'lex',
  'lexon',
  'liquid',
  'livescript',
  'lua',
  'm3',
  'markdown',
  'mips',
  'msdax',
  'mysql',
  'nginx',
  'objective-c',
  'pascal',
  'pascaligo',
  'perl',
  'pgsql',
  'php',
  'pla',
  'plaintext',
  'postiats',
  'powerquery',
  'powershell',
  'proto',
  'pug',
  'python',
  'qsharp',
  'r',
  'razor',
  'redis',
  'redshift',
  'restructuredtext',
  'ruby',
  'rust',
  'sb',
  'scala',
  'scheme',
  'scss',
  'shell',
  'sol',
  'sparql',
  'sql',
  'st',
  'stylus',
  'swift',
  'systemverilog',
  'tcl',
  'toml',
  'ts',
  'tsx',
  'twig',
  'typescript',
  'vb',
  'vbscript',
  'verilog',
  'vue',
  'xml',
  'yaml',
];

export const LANGUAGES = [
  'javascript',
  'html',
  'css',
  'scss',
  'sql',
  'python',
  'typescript',
  'java',
  'shell',
  'csharp',
  'cpp',
  'php',
  'c',
  'powershell',
  'go',
  'rust',
  'kotlin',
  'dart',
  'ruby',
  'assembly',
  'swift',
  'r',
  'vba',
  'matlab',
  'lua',
  'groovy',
  'delphi',
  'scala',
  'objective-c',
  'jsx',
  'tsx',
  'vue',
  'json'
]
  .filter((lang) => DEFAULT_LANGUAGES.includes(lang))
  .sort();

export type Languages = typeof LANGUAGES[number];