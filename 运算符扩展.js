//运算符扩展
a **= 2;    // 等同于 a = a * a;
a?.[x];     // 等同于 a == null ? undefined : a[x]
x ||= y;    // 等同于 x || (x = y)
x &&= y;    // 等同于 x && (x = y)
x ??= y;     // 等同于 x ?? (x = y)