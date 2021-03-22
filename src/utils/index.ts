// Check here (https://chir.ag/projects/name-that-color/) for generated color names
export const colors = {
  TEAL: '#0898A0',
  WHITE: '#FFFFFF',
  DARK: '#012224',
  BLACK: '#000000',
  OFF_TEAL: '#E6F5F6',
  LIGHT_OFF_TEAL: '#FAFDFD',
  JAGGED_ICE: '#CEEAEC',
  OSLO_GRAY: '#838F91',
  ATHENS_GRAY: '#F9F9FA',
  GALLERY: '#F0F0F0',
  WARNING: '#FF9C00',
  RED: '#C81C1C',
};

export const fontFamily = {
  GELION_REGULAR: 'Gelion-Regular',
  GELION_MEDIUM: 'Gelion-Medium',
  GELION_LIGHT: 'Gelion-Light',
  GELION_BOLD: 'Gelion-Bold',
  GELION_BLACK: 'Gelion-Black',
  GELION_SEMI_BOLD: 'Gelion-SemiBold',
};

export const currency = (value: any) => {
  return Number(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
