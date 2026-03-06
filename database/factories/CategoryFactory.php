<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake('pt_BR')->sentence(2);

        return [
            'category_id' => 1, // Se for auto-incremento, geralmente omitimos ou usamos \App\Models\Category::factory()
            'name'        => $name,
            'slug'        => Str::slug($name),
            'description' => fake('pt_BR')->realText(200), // Gera um texto mais natural que o Lorem Ipsum
            'active'      => 1,
            'visiblehome' => 0,
        ];
    }
}
