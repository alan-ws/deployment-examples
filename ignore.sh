if [[ "$VERCEL_GIT_COMMIT_REF" != "no_deploy" ]]; then
  echo "on branch: $VERCEL_GIT_COMMIT_REF";
  echo 'GO';
  exit 1;
fi

echo "on branch: $VERCEL_GIT_COMMIT_REF";
echo 'EXIT';
exit 0;