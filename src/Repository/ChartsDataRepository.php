<?php

namespace App\Repository;

use App\Entity\ChartsData;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ChartsData|null find($id, $lockMode = null, $lockVersion = null)
 * @method ChartsData|null findOneBy(array $criteria, array $orderBy = null)
 * @method ChartsData[]    findAll()
 * @method ChartsData[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ChartsDataRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ChartsData::class);
    }

    // /**
    //  * @return ChartsData[] Returns an array of ChartsData objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ChartsData
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
