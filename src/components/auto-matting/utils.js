/**
 * 获取向量
 * @param {*} r
 * @param {*} g
 * @param {*} b
 */
export function getVector(r, g, b) {
  const u = Math.round((r + g + b) / 3);
  const p1 = r - u;
  const p2 = g - u;
  const p3 = b - u;
  return [p1, p2, p3, u];
}

export function getHorn(p1, p2) {
  const t1 = p1[0] * p2[0] + p1[1] * p2[1] + p1[2] * p2[2] + p1[3] * p2[3];
  const t2 = getVectorMo(p1) * getVectorMo(p2);
  if (t1 === 0 && t2 === 0) {
    return Math.acos(0) * 255 / (Math.PI / 2);
  }
  return Math.acos(t1 / t2) * 255 / (Math.PI / 2);
}

/**
 * 得到向量的模长
 * @param {*} param0
 */
function getVectorMo([p1, p2, p3, u]) {
  return Math.sqrt(p1 * p1 + p2 * p2 + p3 * p3 + u * u);
}
