<template>
    <input v-model="maskedValue" :placeholder="getPlaceholder" @input="handleInput" />
</template>
  
<script>
export default {
    name: 'MaskedInput',
    props: {
        mask: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            maskedValue: this.value,
        };
    },
    computed: {
        getPlaceholder() {
            return this.mask.replace(/9/g, '_');
        },
    },
    methods: {
        handleInput(event) {
            const input = event.target;
            const unmaskedValue = input.value.replace(/[^0-9]/g, '');

            let maskedValue = '';
            let i = 0;

            for (const char of this.mask) {
                if (char === '9') {
                    if (unmaskedValue.length > i) {
                        maskedValue += unmaskedValue.charAt(i);
                        i++;
                    } else {
                        maskedValue += '_';
                    }
                } else {
                    maskedValue += char;
                }
            }

            this.maskedValue = maskedValue;
            this.$emit('input', unmaskedValue);
        },
    },
};
</script>
  