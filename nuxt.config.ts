import type { ThemeRegistrationRaw } from "shiki";

const aurionTheme: ThemeRegistrationRaw = {
  name: 'aurion',
  type: 'dark',
  colors: {
    'editor.background': '#0C0D14',
    'editor.foreground': '#DDDDDD',
  },
  settings: [
    // Rust
    {
      scope: [
          'keyword.other.export',
          'keyword.other.module',
          'keyword.control.directive.conditional.ifdef',
          'variable.other.macro.argument',
          'keyword.control.directive.else',
          'keyword.control.directive.endif',
          'storage.type.primitive',
          'storage.type.namespace.definition',
          'entity.name.type',
          'source',
          'variable.language.this',
          'keyword.operator.new',
          'keyword.operator.wordlike',
          'keyword.control',
      ],
      settings: { foreground: '#BE430E' }
    },
    // Burnt Honey
    {
      scope: [
          'storage.modifier.specifier.functional.pre-parameters.virtual',
          'storage.modifier.virtual',
          'storage.modifier.const',
          'storage.modifier.specifier.const',
          'constant.language.nullptr',
          'keyword.other.default',
          'constant.language.true',
          'constant.language.false',
          'storage.modifier.specifier.functional.post-parameters.override',
          'storage.modifier.specifier.functional.post-parameters.final',
      ],
      settings: { foreground: '#E38014' }
    },
    // Mute
    {
      scope: [
          'variable',
          'storage.type.class',
          'storage.type.modifier.access.public',
          'storage.type.modifier.access.control.public',
          'storage.type.modifier.access.control.private',
          'storage.type.modifier.access.control.protected',
          'string.quoted.other.lt-gt.include',
          'punctuation.section.block',
          'keyword.operator.assignment',
          'meta.parameter',
          'meta.body.class',
          'meta.body.namespace',
          'entity.name.namespace',
          'constant.numeric',
          'keyword.control.directive.include',
          'punctuation.separator.pointer-access',
          'punctuation.section.arguments.begin.bracket.round.function.member',
          'punctuation.section.arguments.end.bracket.round.function.member',
          'punctuation.separator.delimiter.comma',
          'punctuation.terminator.statement',
          'meta.body.function.definition',
          'punctuation.separator.scope-resolution.function.definition',
          'punctuation.separator.namespace.access',
          'punctuation.section.parameters.begin.bracket.round',
          'punctuation.section.parameters.end.bracket.round',
          'punctuation.section.arguments.begin.bracket.round.function.call',
          'punctuation.section.arguments.end.bracket.round.function.call',
      ],
      settings: { foreground: '#A6ABC9' }
    },
    // Warning Dark
    {
      scope: [
          'entity.name.function',
          'entity.name.type.parameter',
      ],
      settings: { foreground: '#C69906' }
    },
    // Success Darker
    {
      scope: [
          'comment.line.double-slash',
          'string'
      ],
      settings: { foreground: '#1F843C' }
    },
    // Aqua Dark
    {
      scope: [
          'entity.name.scope-resolution.function.definition',
          'entity.name.scope-resolution',
          'entity.name.function.preprocessor',
          'entity.name.other.preprocessor.macro',
      ],
      settings: { foreground: '#00A3A3' }
    },
  ]
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['@nuxt/content']
  },
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/image'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
  content: {
    build: {
      experimental: {
        nativeSqlite: true
      },
      markdown: {
        toc: {
          depth: 3
        },
        highlight: {
          theme: {
            default: aurionTheme
          },
          langs: [
            'c',
            'cpp',
            'javascript',
            'typescript'
          ],
        }
      }
    },
  },
  compatibilityDate: '2026-04-07'
});
