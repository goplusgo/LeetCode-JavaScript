var minMeetingRooms = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let ends = new Array();
  let minMeetingRooms = 0;
  for (let interval of intervals) {
    for (let i = 0; i < ends.length; ++i) {
      if (interval[0] < ends[i]) {
        break;
      }
      ends.splice(i, 1);
      --i;
    }

    ends.push(interval[1]);
    ends.sort((a, b) => a - b);
    minMeetingRooms = Math.max(minMeetingRooms, ends.length);
  }

  return minMeetingRooms;
};
