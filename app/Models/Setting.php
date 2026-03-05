<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'logo',
        'title',
        'description',
        'url',
        'opening',
        'state',
        'city',
        'neighborhood',
        'street',
        'number',
        'complement',
        'maps',
        'telephone',
        'celular',
        'email',
        'whatsapp',
        'instagram',
        'facebook',
        'redex',
        'youtube',
        'metatitle',
        'metakeyword',
        'metadescription',
    ];
}
