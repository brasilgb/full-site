<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->nullable()->references('id')->on('categories'); // react select
            $table->string('name'); // 
            $table->string('slug'); // slug automático 
            $table->text('description')->nullable();
            $table->text('thumbnail')->nullable(); // Miniaturas de imagem
            $table->string('featured')->nullable(); // Imagem destaque
            $table->string('type')->nullable(); // Produtos, serviços, etc..., usar select
            $table->integer('active'); // categoria ativa, usar switch
            $table->integer('visiblehome'); // usar switch
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
