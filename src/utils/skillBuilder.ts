export const skillBuilder = (skills: string[]): string => {
  const firstSkill = skills[0] || '';
  if (skills.length === 1) return firstSkill;

  return firstSkill + ' · ' + skillBuilder(skills.slice(1));
};
