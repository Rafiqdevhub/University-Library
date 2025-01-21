const ratelimit = new Ratelimit({
  analytics: true,
  prefix: "@upstash/ratelimit",
});

export default ratelimit;
