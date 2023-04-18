import type { Style } from './type'

export const getDefaultStyle = (visible: boolean): Style => ({
  display: visible ? 'flex' : 'none',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
});
