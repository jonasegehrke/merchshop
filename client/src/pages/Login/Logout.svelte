<script>
  import { useNavigate, useLocation } from "svelte-navigator";
  import { isLoggedIn } from "../../stores/store";
  import { toasts } from "svelte-toasts";

  const navigate = useNavigate();
  const location = useLocation();

  isLoggedIn.set(false);

  $: if ($isLoggedIn === false) {
    toasts.info("Successfully logged out");
    navigate("/login", {
      state: { from: $location.pathname },
      replace: true,
    });
  }
</script>

{#if $isLoggedIn}
  <slot />
{/if}
