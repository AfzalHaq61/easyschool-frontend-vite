<template>
    <a :href="link" :class="['avatar', size, className]">
        <img :class="['avatar-img', rounded]" :src="resolveImageUrl(image)" alt="User Image">
    </a>
</template>

<script setup>
import { resolveImageUrl } from '@/utils/images';

defineProps({
    image: {
        type: String,
        default: null
    },
    size: {
        type: String,
        default: 'avatar-sm'
    },
    rounded: {
        type: String,
        default: 'rounded-circle'
    },
    link: {
        type: String,
        default: 'javascript:void(0);'
    },
    className: {
        type: String,
        default: ''
    }
});
</script>
