<script>
  import { useNavigate, useLocation } from "svelte-navigator";
  import { isLoggedIn } from "../stores/store";

  const navigate = useNavigate();
  const location = useLocation();

  console.log($isLoggedIn);

  $: if ($isLoggedIn === false) {
    navigate("/login", {
      state: { from: $location.pathname },
      replace: true,
    });
  }
</script>

{#if $isLoggedIn}
  <slot />
{/if}
