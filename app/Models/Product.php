<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    protected $fillable = [
        'brand',
        'title',
        'slug',
        'summary',
        'content',
        'featured',
        'active',
        'url',
        'home',
        'valnormal',
        'valpromo',
    ];
    
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }
}
