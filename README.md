# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


 <!-- /** SOLO PROJECT */
/**
 * 1. two screens (start and questions)
 * 2. pull 5 questions from OTDB
 * 3. tally correct answers after "check answers" is cliked
 * 4. styled and polished
 */

/** HINTS */
/**
 * 1. API returns HTML entities. Use libraries like (he or html-entities) to decode these strings
 * 2. make sure you have one array with all the answers so that the answers are never in the same index. shuffle the array.
 * 3. limit answer choice to 1 and style selected answer: eitehr 1) track the selected answer index
 *    inside each questions object or 
 *      2) use an HTML form with radio inputs using the same "name" attribute to automatically only allow one selection (and check google on how to style a radio input to look like a button)
 */ -->