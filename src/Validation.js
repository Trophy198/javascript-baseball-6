export function validateInput(input) {
  if (typeof input !== 'string') {
    throw new Error('[ERROR] 입력값은 문자열이어야 합니다.');
  }
  if (input.length !== 3) {
    throw new Error('[ERROR] 입력값은 3자리 숫자이어야 합니다.');
  }
}
  