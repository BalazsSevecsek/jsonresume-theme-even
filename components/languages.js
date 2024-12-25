import { html } from '@rbardini/html'

/**
 * @param {import('../schema.d.ts').ResumeSchema['languages']} languages
 * @returns {string | false}
 */
export default function Languages(languages = []) {
  return (
    languages.length > 0 &&
    html`
      <section id="languages" class="display-unit">
        <h3>Languages</h3>
        <div class="grid-list">
          ${languages.map(
            ({ fluency, language }) => html`<div>${language && html`<h4>${language}</h4>`} ${fluency}</div>`,
          )}
        </div>
      </section>
    `
  )
}
