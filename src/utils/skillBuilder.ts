export const skillBuilder = (skills: string[] | undefined): string => {
  if (!skills) return '';

  const firstSkill = skills[0] || '';
  if (skills.length === 1) return firstSkill;

  return firstSkill + ' · ' + skillBuilder(skills.slice(1));
};
