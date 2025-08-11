## Contributing

Please review the full contributing documentation on our website:
https://actualbudget.org/docs/contributing/

### UI and styling

The project uses a Tailwind CSS based component library for all user interface
work. Use Tailwind utility classes and components from `@actual-app/components`
instead of adding new CSS or SCSS files.

### Imports

Import modules using workspace aliases rather than relative parent paths.
ESLint enforces this convention along with Tailwind usage. Run `yarn lint`
before submitting pull requests.
