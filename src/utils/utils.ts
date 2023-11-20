export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function timeString(timestamp:Date): string {
  const milliseconds = timestamp.getTime();
  const diffTime = (new Date()).getTime() - milliseconds;

  switch (true) {
    // YEARS
    case diffTime > (2 * 365 * 24 * 60 * 60 * 1000):
      return `${Math.floor(diffTime/(365 * 24 * 60 * 60 * 1000))} years ago`;

    case diffTime > (30 * 11 * 24 * 60 * 60 * 1000):
      return 'last year';

    // MONTHS
    case diffTime > (30 * 24 * 60 * 60 * 1000):
      return `${Math.floor(diffTime/(30 * 24 * 60 * 60 * 1000))} months ago`;

    case diffTime > (7 * 3 * 24 * 60 * 60 * 1000):
      return 'last month';

    // WEEKS
    case diffTime > (7 * 2 * 60 * 60 * 1000):
      return `${Math.floor(diffTime/(7 * 24 * 60 * 60 * 1000))} weeks ago`;

    case diffTime > (7 * 24 * 60 * 60 * 1000):
      return 'last week';

    // DAYS
    case diffTime > (2 * 24 * 60 * 60 * 1000):
      return `${Math.floor(diffTime/(24 * 60 * 60 * 1000))} days ago`;

    case diffTime > (24 * 60 * 60 * 1000):
      return 'yesterday';

    // HOURS
    case diffTime > (2 * 60 * 60 * 1000):
      return `${Math.floor(diffTime/(60 * 60 * 1000))} hours ago`;

    case diffTime > (60 * 60 * 1000):
      return 'last hour';

    // HOURS
    case diffTime > (2 * 60 * 1000):
      return `${Math.floor(diffTime/(60 * 1000))} minutes ago`;

    case diffTime > (60 * 1000):
      return 'last minute';

    default:
      return 'a few seconds ago';
  }
}
