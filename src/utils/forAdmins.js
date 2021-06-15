async function forAdmins(ctx, cb) {
  try {
    const check = await ctx.telegram.getChatMember(
      process.env.ADMIN_CH_ID,
      ctx.from.id,
    );
    if (check && check.status !== 'kicked' && check.status !== 'left') {
      return cb(ctx);
    }
    return 0;
  } catch (e) {
    console.error(e);
    return 0;
  }
}

export default forAdmins;
