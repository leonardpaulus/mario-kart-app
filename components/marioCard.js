import { createElement } from '../lib/elements';
import styles from './marioCard.module.css';

export function createMarioCard({ name, special_skill, rarity }) {
  const marioCard = createElement('div', { className: styles.marioCard }, [
    createElement('h2', {
      className: styles.headline,
      textContent: name,
    }),
    createElement('div', { className: styles.specialSkillWrapper }, [
      createElement(
        'h3',
        { className: styles.specialSkill, textContent: 'Special Skill:' },
        [
          createElement('p', {
            className: styles.specialSkill,
            textContent: special_skill,
          }),
        ]
      ),
    ]),
    createElement('div', { className: styles.rarityWrapper }, [
      createElement(
        'h3',
        { className: styles.rarity, textContent: 'Rarity:' },
        [
          createElement('p', {
            className: styles.rarity,
            textContent: rarity,
          }),
        ]
      ),
    ]),
  ]);
  return marioCard;
}
