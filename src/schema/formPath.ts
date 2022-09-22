function parsePath(pattern: string, base: string) {
  if (pattern.startsWith('.')) {
    let path = pattern;
    const baseArray = base.split('.');
    while (path.startsWith('.')) {
      baseArray.pop();
      path = path.slice(1);
    }
    return `${baseArray.join('.')}.${path}`;
  } else {
    return pattern;
  }
}

export {
  parsePath,
}