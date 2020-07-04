/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
/* eslint-disable no-else-return */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */

export default function getHealth(warrior) {
    if (warrior.health > 50) {
        return 'healthy';
    } else if (warrior.health <= 50 && warrior.health >= 15) {
        return 'wounded';
    } else {
        return 'critical';
    }
} 
