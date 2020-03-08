export const required = value => {
  return value ? undefined : 'Required';
}

export const emptyMessage = value => {
  return value ? undefined : 'Enter message before sending';
}

export const emptyPost = value => {
  return value ? undefined : 'Type post text before publishing';
}

export const maxLength = max => value => {
  return value.length > max ? `Max length is ${max} letters` : undefined;
}

export const email = value => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined;
}