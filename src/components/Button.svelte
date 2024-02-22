<script>
  export let variant = "primary";
  export let disabled = false;
</script>

<button class="button variant-{variant}" disabled={disabled}>
  <slot/>
</button>