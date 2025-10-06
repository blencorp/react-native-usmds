const React = require('react');
const { View } = require('react-native');

const createMockComponent = (name) =>
  React.forwardRef((props, ref) => React.createElement(View, { ...props, ref }));

const Svg = createMockComponent('Svg');

module.exports = {
  __esModule: true,
  default: Svg,
  Svg,
  Circle: createMockComponent('Circle'),
  ClipPath: createMockComponent('ClipPath'),
  Defs: createMockComponent('Defs'),
  Ellipse: createMockComponent('Ellipse'),
  G: createMockComponent('G'),
  Image: createMockComponent('Image'),
  Line: createMockComponent('Line'),
  LinearGradient: createMockComponent('LinearGradient'),
  Mask: createMockComponent('Mask'),
  Path: createMockComponent('Path'),
  Pattern: createMockComponent('Pattern'),
  Polygon: createMockComponent('Polygon'),
  Polyline: createMockComponent('Polyline'),
  RadialGradient: createMockComponent('RadialGradient'),
  Rect: createMockComponent('Rect'),
  Stop: createMockComponent('Stop'),
  Symbol: createMockComponent('Symbol'),
  Text: createMockComponent('Text'),
  TextPath: createMockComponent('TextPath'),
  TSpan: createMockComponent('TSpan'),
  Use: createMockComponent('Use')
};
