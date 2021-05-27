<script lang="ts">
    import { DateTime } from "luxon";

    export let format: string = 'yyyy LLL dd';
    export let value: Date;

</script>

{(DateTime.fromJSDate(value)).toFormat(format)}