/**
 * HSL to RGB
 * @param {*} H 0 - 360
 * @param {Number /100} S 0 - 1
 * @param {Numver /100} L 0 - 1
 */
export function hslToRgb(H, S, L) {
  let R, G, B;
  S = S / 100;
  L = L / 100;
  const C = (1 - Math.abs(2 * L - 1)) * S;
  const X = C * (1 - Math.abs((H / 60) % 2 - 1));
  const m = L - C / 2;
  const [R1, G1, B1] = getRGB(H, C, X);
  R = Math.round((R1 + m) * 255);
  G = Math.round((G1 + m) * 255);
  B = Math.round((B1 + m) * 255);
  return {
    R,
    G,
    B
  };
}

/**
 * HSB/HSV转HSL
 * @param {*} H
 * @param {*} S
 * @param {*} B
 */
export function hsbToHsl(H, S, B) {
  S = S / 100;
  B = B / 100;
  const L = B * (2 - S) / 2;
  const S1 = B * S / (1 - Math.abs(2 * L - 1));

  return {
    h: H,
    s: Math.round(S1 * 100),
    l: Math.round(L * 100)
  };
}

/**
 * 得到R' G' B'
 * @param {*} H
 * @param {*} C
 * @param {*} X
 */
function getRGB(H, C, X) {
  if (H < 60) {
    return [C, X, 0];
  } else if (H < 120) {
    return [X, C, 0];
  } else if (H < 180) {
    return [0, C, X];
  } else if (H < 240) {
    return [0, X, C];
  } else if (H < 300) {
    return [X, 0, C];
  } else if (H <= 360) {
    return [C, 0, X];
  }
}
